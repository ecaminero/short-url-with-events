import uuid
from sqlalchemy import (Column ,String, Date, DateTime)
from sqlalchemy.dialects.postgresql import UUID
from src.models.BaseModel import Base
from datetime import datetime

class Url(Base):
    __tablename__ = "url"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    original = Column(String(), nullable=False)
    short = Column(String(), nullable=False)
    key = Column(String(), nullable=False)
    expire_at = Column(Date())

    def __repr__(self):
        return f'Url(\'{self.id}\', {self.key})'


    def normalize(self):
        return {
            "id": self.id.__str__(),
            "original": self.original.__str__(),
            "short": self.short.__str__(),
            "expire_at": self.expire_at.__str__(),
        }
    