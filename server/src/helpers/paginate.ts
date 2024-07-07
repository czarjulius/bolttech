type orderType = "ASC" | "DESC" | "NULLS FIRST";

export const getPaginatedRecords = async (
  model,
  {
    limit = 20,
    page,
    order = "DESC",
    pageOffset,
    orderFields = ["createdAt", order],
  }: {
    limit?: number;
    page: number;
    order?: orderType;
    pageOffset?: number;
    orderFields?: Array<string | object>;
  },
  ...args
): Promise<typeof model> => {
  const offset = pageOffset !== undefined ? pageOffset : (page - 1) * limit;

  const result = await model.findAll({
    ...args[0],
    offset,
    limit,
    order: Array.isArray(orderFields[0]) ? [...orderFields] : [orderFields],
  });

  const { include, ...rest } = args[0] || {};

  const count = args[0]?.ignoreCount
    ? (await model.findAll(args[0])).length
    : await model.count({ ...rest }); // sequelize behaves weirdly for nested queries so I gotta do this

  return {
    data: result,
    total: count,
    currentPage: page,
    hasNext: page * limit < count,
    hasPrevious: page > 1,
    perPage: limit,
    totalPages: Math.ceil(count / limit),
  };
};
