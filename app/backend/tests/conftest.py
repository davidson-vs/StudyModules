import pytest

from sqlalchemy import create_engine
from sqlalchemy.orm import Session

from database.models import Base


# configurando os testes da aplicação
@pytest.fixture()
def session():
    engine = create_engine('sqlite:///:memory:')
    Base.metadata.create_all(bind=engine)

    try:
        with Session(engine) as session:
            yield session
    finally:
        # No final dos testes remover todos os metadados da memória.
        Base.metadata.drop_all(bind=engine)
        session.close() # finalizando a sesseion aberta para os testes
    