import uuid from 'uuid/v4';

const createAction = expense => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name: expense.name,
    price: expense.price,
    content: expense.content,
    categoryId: expense.categoryId,
    timestamp: new Date(),
    id: uuid(),
  },
});

export const updateAction = expense => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const removeAction = expense => ({
  type: 'EXPENSE_REMOVE',
  payload: expense,
});

export { createAction, updateAction, removeAction };
