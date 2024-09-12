from fastapi import FastAPI, HTTPException

from database.config import test_db_connection, engine
from database.models import Base
from routers.employee import router as employee_routers

app = FastAPI(
    description="""
        API simples com fastapi para ajudar nos meus estudos 
        sobre engenharia de software e arquitetura de sistemas.
    """
    )

# adicionando as rotas do módulos do projeto
app.include_router(employee_routers)

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
