const Pagination = (req) => {
    let page = Number(req.query.page) * 1 || 1;
    let limit = Number(req.query.limit) * 1 || 10;
    let skip = (page - 1) * limit;

    return { page, limit, skip };
}
module.exports = Pagination