module.exports = function(app) {
    
    const controller = app.controllers.categories;
    const itemsController = app.controllers.items;
    
    app.route('/v1/categories')
    .get(controller.list)
    .post(controller.create);

    app.route('/v1/categories/:id/items')
    .get(itemsController.listByCategoryId);

    app.route('/v1/categories/:id')
    .get(controller.get);

}