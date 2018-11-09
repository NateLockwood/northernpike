import os
from pathlib import Path

from aiohttp import web, http_websocket

WEB_ROOT = Path(__file__).parents[2] / 'ui/dist/controlpanel/'


# Serve index.html when '/' is requested
async def root_handler(request):
    return web.FileResponse(os.path.join(WEB_ROOT, 'index.html'))


# Serves 404s /index.html as required by Angular. Redirecting would change the url
# in the address bar (not desired behavior) refer to
# https://angular.io/guide/deployment#routed-apps-must-fallback-to-indexhtml
# DO NOT USE, currently breaks everything
async def deeplink_handler(request):
    return web.FileResponse(os.path.join(WEB_ROOT, 'index.html'))


async def websocket_handler(request):
    print('Websocket connection starting')
    socket = web.WebSocketResponse()
    await socket.prepare(request)
    print('Websocket connection ready')

    async for msg in socket:
        print('websocket message received :' + msg.data)
        if msg.type == http_websocket.WSMsgType.TEXT:
            if msg.data == 'close':
                await socket.close()
            else:
                await socket.send_str(msg.data)
                print('Sent websocket echo')
        elif msg.type == http_websocket.WSMsgType.ERROR:
            print('ws connection closed with exception %s' %
                  socket.exception())

    print('websocket connection closed')

    return socket


async def on_shutdown(app):
    # close peer connections
    for socket in set(app['websockets']):
        await socket.close()


if __name__ == '__main__':
    SERVER = web.Application()
    SERVER.on_shutdown.append(on_shutdown)
    SERVER.router.add_get('/', root_handler)
    SERVER.router.add_get('/ws', websocket_handler)
    SERVER.router.add_static(prefix='/', path=WEB_ROOT)
    web.run_app(SERVER, host='127.0.0.1', port=8080)
