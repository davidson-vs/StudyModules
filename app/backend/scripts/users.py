from typing import Union, List, Optional
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from database.models import Empresa, Funcionario
from utils.security import get_password_hash, verify_password
from models.employee import BaseFuncionario


def get_companies(db: Session, company_id: Optional[int]) -> Union[List[dict], dict]:
    if company_id is not None:
        company = db.query(Empresa).filter(Empresa.Id == company_id).first()
        return {
            'NmEmpresa': company.NmEmpresa,
            'IdEmpresa': company.Id
        }
    
    companies = db.query(Empresa).all()
    


def get_user_company(db: Session, user_id: Optional[int], email: Optional[str]) -> dict:
    if not user_id and not email:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='O e-mail ou o id do usuário deve ser passado.')

    # Verificar como fazer inner join com o sqlalchemy para retornar os campos desejados 

def get_employees_acess_token(db: Session, email: str, password: str) -> dict:
    user = db.query(Funcionario).filter(Funcionario.Email == email).first()

    if not user or not verify_password(password, user.Senha):
        # Escolha da mensagem para aumentar o nível de segurança da aplicação (não especificar se o usuário existe em caso de tentativa de invasão).
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='E-mail ou senha incorretos.')

    result = BaseFuncionario(
        id=user.Id,
        nome=user.NmFuncionario,
        area=user.Area,
        email=user.Email,
        senha=user.Senha,
        id_gestor=user.IdGestor,
        is_gestor=user.IsGestor,
        id_empresa=user.IdEmpresa,
    )

    response = {
        **result,
        'empresa': user.empresa
    }

def insert_user(db: Session, name: str, email: str, pwd: str, area: str, is_manager: bool, manager_id: int) -> dict:
    try:
        new_employee = Funcionario(
            NmFuncionario=name,
            Area=area,
            Email=email,
            Senha=get_password_hash(pwd),
            IsGestor=is_manager,
            IdGestor=manager_id
            )
        
        db.add(new_employee)
        db.commit()
        db.refresh()
        
        return {'msg': 'Usuário criado com sucesso!'} 
    
    except Exception as error:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=rf'Ocorreu um erro ao criar o usuário: {error}')
    finally:
        db.close() # verificar se precisa no final de cada requisição ao banco.
