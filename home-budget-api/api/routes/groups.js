module.exports = function(app) {

    var controller = app.controllers.groups;

    app.route('/v1/groups')
    .get(controller.list)
    .post(controller.create);

    app.route('/v1/groups/:id')
    .get(controller.get)
    .put(controller.update);

    app.route('/v1/groups/:id/categories')
    .get(controller.listCategories);

}