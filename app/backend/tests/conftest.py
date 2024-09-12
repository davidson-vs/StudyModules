import pytest

from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy.pool import StaticPool

from database.models import Base
from database.config import get_db_session
from main import app



@pytest.fixture()
def client(session):
    # Função que cria uma instância de teste da aplicação (test user)
    def fake_session():
        return session
    
    with TestClient(app) as client:
        app.dependency_overrides[get_db_session] = fake_session
        yield client

    app.dependency_overrides.clear()


# configuração inicial para os testes da aplicação
@pytest.fixture()
def session():
    try:
        engine = create_engine(
            'sqlite:///:memory:',
            poolclass=StaticPool,
            connect_args={'check_same_thread': False}
            )
        Base.metadata.create_all(bind=engine)

        with Session(engine) as session:
            yield session
    except Exception as error:
        raise Exception(error)
    finally:
        # No final dos testes remover todos os metadados da memória.
        Base.metadata.drop_all(bind=engine)
        session.close() # finalizando a sesseion aberta para os testes
    