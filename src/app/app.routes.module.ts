
    import { DetailComponent } from './component/detail/detail.component';
import { EventComponent } from './component/event/event.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { DisplaypageComponent } from './component/displaypage/displaypage.component';
import { BookingformComponent } from './component/bookingform/bookingform.component';
import { ViewComponent } from './component/view/view.component';


export const AppRoutes=[
    
    {path:'',component:EventComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path: 'bookingform',component:BookingformComponent},
    {path: 'detail',component:DetailComponent, children: [
        {path: 'display',component:DisplaypageComponent},
        {path: 'view',component:ViewComponent},
     
    ]},
];