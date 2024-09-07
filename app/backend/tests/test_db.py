from sqlalchemy import select

from database.models import Base, Funcionario, Empresa


def test_create_company(session):
    company = Empresa(
        NmEmpresa = 'Empresa Teste S.A'
    )

    session.add(company)
    session.commit()

    result = session.scalar(
        select(Empresa).where(Empresa.Id == 1)
        )
    
    assert result.NmEmpresa == company.NmEmpresa


def test_create_employee(session):
    user = Funcionario(
        NmFuncionario = 'Teste de Teste Teste',
        Area = 'Qualidade de Software',
        Email = 'teste@teste.com.br',
        IsGestor = False,
        IdEmpresa = 1
    )

    session.add(user)
    session.commit()
    
    assert user.Id == 1

