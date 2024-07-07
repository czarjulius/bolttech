export const createNewEntity = async (model, data) => {
  console.log(data, '>>>>>>>>>>>>>>>>>');

  return model.create(data);
};

export const editEntity = async (model, filter, data = {}) =>
  model.update(data, { where: filter, raw: true, returning: true });
