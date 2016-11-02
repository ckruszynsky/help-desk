import {bindable, bindingMode, inject, noView, TaskQueue} from 'aurelia-framework';

CKEDITOR.config.skin = 'bootstrapck';

/*
  Element - is the actual HTML element, this gives you access to the DOM.
  TaskQueue - Manages async tasks (micro & macro tasks)
*/
@inject(Element, TaskQueue)
@noView() //designates to Aurelia that there isn't a related view file / template.
export class RichTextEditor {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;

  constructor(element, taskQueue) {
    this.element = element;
    this.taskQueue = taskQueue;
    this.guard = false;
  }
  
  /*
    owningView - parent view 
  */
  created(owningView) {
    let original = owningView.removeNodes;
    let that = this;
    
    owningView.removeNodes = () => {
      //destroys editor before removing nodes
      this.editor.destroy();
      original.call(owningView);
    };
  }

  bind() {
    this.editor = CKEDITOR.appendTo(this.element, { removePlugins: 'resize, elementspath' }, this.value);
    
    this.editor.on('change', () => {
      let newValue = this.editor.getData();
      
      if(this.value === newValue) {
        return;
      }
      
      this.guard = true; //prevents re-entry; re-triggering the event update
      this.value = newValue;
      this.taskQueue.queueMicroTask(() => this.guard = false);
    });
  }

  valueChanged(newValue, oldValue) {
    if (this.guard || !this.editor) {
      return;
    }
    
    this.editor.setData(newValue);
  }
}
