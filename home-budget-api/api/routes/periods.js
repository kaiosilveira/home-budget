module.exports = app => {

    const controller = app.controllers.periods;

    app.route('/v1/periods')
    .get(controller.list)
    .post(controller.create);

    app.route('/v1/periods/:periodId/groups')
    .get(controller.listGroups);

}