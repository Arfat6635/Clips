import { Component, ContentChild, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit {
@ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();

ngAfterContentInit(): void {
  
}

 }
