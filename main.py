from fastapi import FastAPI
from view3d.main import view3d_app


app = FastAPI()

app.mount("/view3d", view3d_app)
