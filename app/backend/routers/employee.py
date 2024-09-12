from fastapi import APIRouter, Depends

from database.config import get_db_session
from scripts import users

router = APIRouter(
    prefix='/users'
)

@router.get('/get_employees', tags=['Employees'] )
async def get_users(session = Depends(get_db_session)):
    ...

@router.post('/create_user', tags=['Employees'])
async def create_user(session = Depends(get_db_session)):
    ...

