import Dashboard from './components/dashboard/Dashboard.vue';
import Groups from './components/groups/Groups.vue';
import CategoryDetails from './components/category-details/CategoryDetails.vue';
import CategoryItemForm from './components/category-item-form/CategoryItemForm.vue';

export const routes = [
    { path: '', component: Dashboard },
    { path: '/groups', component: Groups },
    { path: '/category/:id', component: CategoryDetails },
    { path: '/category/:id/item/form', component: CategoryItemForm },
];