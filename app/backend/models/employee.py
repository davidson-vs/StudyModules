from typing import Optional, Literal
from pydantic import BaseModel, Field


class BaseFuncionario(BaseModel):
    id: Optional[int] = Field(None)
    area: Optional[str] = Field(None, max_length=50)
    nome: Optional[str] = Field(None, max_length=50)
    email: Optional[str] = Field(None, max_length=50)
    senha: Optional[str] = Field(None, max_length=16)
    is_gestor: Optional[bool] = Field(False)
    id_gestor: Optional[int] = Field(None)
    id_empresa: Optional[int] = Field(None)

class FuncionarioResponse(BaseModel):
    id: int
    nome: str
    area: str
    email: str
    is_gestor: bool
    id_empresa: int
    
class CreateFuncionario(BaseFuncionario):
    area: str = Field(..., max_length=50)
    nome: str = Field(..., max_length=50)
    email: str = Field(..., max_length=50)
    id_empresa: int = Field(...)
