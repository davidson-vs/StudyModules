from sqlalchemy.sql import text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean, func, Text


Base = declarative_base()

class BaseModel(Base):
    __abstract__ = True

    Id = Column(Integer, primary_key=True, autoincrement=True)
    DtCriacao = Column(DateTime, default=func.now(), server_default=text('CURRENT_TIMESTAMP'), nullable=True)
    DtAtualizacao = Column(DateTime, default=func.now(), server_default=text('CURRENT_TIMESTAMP'),  onupdate=func.now(), nullable=False)

class Empresa(BaseModel):

    __tablename__ = 'TbEmpresa'
    NmEmpresa = Column(String(50), unique=True, nullable=False)

    # Relação com Funcionarios
    funcionarios = relationship('Funcionario', back_populates='empresa')

class Area(BaseModel):
    __tablename__ = 'TbArea'

    NmArea = Column(String(30), nullable=False, unique=True)
    IdGestor = Column(ForeignKey('TbFuncionario.Id'), nullable=True)

    funcionarios = relationship('Funcionario', back_populates='area')

class Funcionario(BaseModel):

    __tablename__ = 'TbFuncionario'
    NmFuncionario = Column(String(50), nullable=False)
    
    Email = Column(String(50), nullable=False, unique=True)
    Senha = Column(Text, nullable=False)
    Cargo = Column(String(30), nullable=False) 
    IdGestor = Column(Integer, nullable=True)
    
    # Definindo a chave estrangeira que referencia TbEmpresas.Id
    IdEmpresa = Column(Integer, ForeignKey('TbEmpresa.Id'), nullable=False)
    IdArea = Column(ForeignKey('TbArea.Id'), nullable=False)
    # Relacionamento com a tabela Empresas
    empresa = relationship('Empresa', back_populates='funcionarios')
    area = relationship('Area', back_populates='funcionarios')