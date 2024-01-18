from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from starlette.templating import Jinja2Templates

view3d_app = FastAPI()

view3d_app.mount("/static", StaticFiles(directory="view3d/static"), name="static")
templates = Jinja2Templates(directory="view3d/templates")

@view3d_app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})