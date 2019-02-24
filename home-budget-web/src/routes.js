import Dashboard from './components/pages/dashboard/Dashboard.vue'
import Category from './components/pages/category/Category.vue'
import Groups from './components/groups/Groups.vue'
import CategoryDetails from './components/category-details/CategoryDetails.vue'
import CategoryItemForm from './components/category-item-form/CategoryItemForm.vue'
import GroupDetails from './components/pages/group-details/GroupDetails.vue'

export const routes = [
    { path: '', component: Dashboard },
    { path: '/groups', component: Groups },
    { path: '/groups/:id', component: GroupDetails },
    { path: '/category/:id', component: CategoryDetails },
    { path: '/category/:id/item/form', component: CategoryItemForm },
    { path: '/category', component: Category },
];