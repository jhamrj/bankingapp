import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodeleteComponent } from './videodelete.component';

describe('VideodeleteComponent', () => {
  let component: VideodeleteComponent;
  let fixture: ComponentFixture<VideodeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideodeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
