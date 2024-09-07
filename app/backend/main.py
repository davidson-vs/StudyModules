from fastapi import FastAPI, HTTPException

from database.config import test_db_connection, engine
from database.models import Base


app = FastAPI(
    description="""
        API realizada para realizar as operações necessárias com o banco 
        durante meus estudos engenharia de software e arquitetura de sistemas.
    """
    )

@app.on_event('startup')
async def startup_application():
    try:
        test_db_connection()
        Base.metadata.create_all(bind=engine)
    except Exception as e:
        raise HTTPException(status_code=503, detail=str(e))


@app.get('/')
async def get_health_system():
    return {
        "msg": "Hello world, i'm alive!"
    }
