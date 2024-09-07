from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError


DB_URL = 'sqlite:///database/database.db'

engine = create_engine(DB_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=True, bind=engine)

def get_db_session():
    session = SessionLocal()
    try:
        yield session
    finally:
        session.close()

def test_db_connection():
    try:
        # Tentativa de conexão
        with engine.connect() as connection:
            # Se conectar com sucesso, imprime uma mensagem de sucesso
            print("Conexão com o banco de dados bem-sucedida!")
    except SQLAlchemyError as e:
        # Se falhar, imprime uma mensagem de erro e encerra o programa
        print(f"Falha na conexão com o banco de dados: {e}")
        raise e