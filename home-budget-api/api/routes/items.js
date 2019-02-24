module.exports = function(app) {

    const controller = app.controllers.items;

    app.route('/v1/items')
    .get(controller.list)
    .post(controller.create);

    app.route('/v1/items/:id')
    .get(controller.get);

}