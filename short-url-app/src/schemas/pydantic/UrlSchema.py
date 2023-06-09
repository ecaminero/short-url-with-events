from __future__ import annotations

from datetime import timedelta, date, datetime
from pydantic import BaseModel, validator, root_validator
from fastapi import Body
from typing import Optional
from src.utils import validate_url, available_url

class Url(BaseModel):
    original: str
    expire_at: Optional[date] = Body(
        default_factory=lambda: date.today() + timedelta(days=2))

    @validator("expire_at")
    def expire_at_is_valid(cls, expire_at: date) -> date:
        if expire_at  and isinstance(expire_at, str):
            expire_at = datetime.strptime(expire_at, "%Y-%m-%d").date()
        
        if expire_at <= date.today():
            raise ValueError("expire_at must be greater than today")

        return expire_at
    
    @validator("original")
    def url_is_valid(cls, original: str) -> str:
        if not validate_url(original):
            raise ValueError("Url is not valid, must be https://example.com")
        
        if not available_url(original, timeout=2):
            raise ValueError("The url must be available")
        
        return original

class UpdateUrl(Url):
    __annotations__ = {k: Optional[v] for k, v in Url.__annotations__.items()}
    original: str = ""
    expire_at: str = ""
