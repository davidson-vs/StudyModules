from sqlalchemy.sql import text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, func


Base = declarative_base()

class BaseModel(Base):
    __abstract__ = True

    Id = Column(Integer, primary_key=True, autoincrement=True)
    DtCriacao = Column(DateTime, default=func.now(), server_default=text('CURRENT_TIMESTAMP'), nullable=True)
    DtAtualizacao = Column(DateTime, default=func.now(), server_default=text('CURRENT_TIMESTAMP'),  onupdate=func.now(), nullable=False)

class Empresas(BaseModel):

    __tablename__ = 'TbEmpresas'
    NmEmpresa = Column(String(50), unique=True, nullable=False)

    # Relação com Funcionarios
    funcionarios = relationship('Funcionarios', back_populates='empresa')

class Funcionarios(BaseModel):

    __tablename__ = 'TbFuncionarios'
    NmFuncionario = Column(String(50), nullable=False)
    Area = Column(String(50), nullable=False)
    Email = Column(String(50), nullable=False, unique=True)
    IsGestor = Column(Boolean, default=False, nullable=False)
    IdGestor = Column(Integer, nullable=True)
    
    # Definindo a chave estrangeira que referencia TbEmpresas.Id
    IdEmpresa = Column(Integer, ForeignKey('TbEmpresas.Id'), nullable=False)
    
    # Relacionamento com a tabela Empresas
    empresa = relationship('Empresas', back_populates='funcionarios')

