export const required = value => {
  if (value) return undefined;

  return "Это поле обязательно для заполнения!";
}

export const maxLength = (max) => {
  return (value) => {
    if (String(value).length > max) return `Максимальное количество ${max} символов`;

    return undefined;
  };
}