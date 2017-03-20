import {Routes,RouterModule} from '@angular/router'
import {component2} from './component2'
import {ModuleWithProviders} from '@angular/core'
// import {Routes,RouterModule} from '@angular/router'
// import {ModuleWithProviders} from '@angular/core'
// import {AppComponent} from './app.component'
import {component3} from './component3'
import {component4} from './component4'
import {component5} from './component5'

// const appRoutes:Routes=[
//     {path:'compo3',component:AppComponent3},
//     {path:'compo2',component:AppComponent2}
// ]

// export const AppRoutingModule:ModuleWithProviders=RouterModule.forRoot(appRoutes);

const appRoutes:Routes=[
    {path:'compo1',component:component2},
    {path:'compo2',component:component3},
    {path:'compo3',component:component4},
    {path:'compo4',component:component5},
]

export const routingModule:ModuleWithProviders=RouterModule.forRoot(appRoutes);