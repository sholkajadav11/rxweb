import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-greaterThanEqualTo-conditionalExpression-template-driven-validation-directives',
    templateUrl: './greater-than-equal-to-conditional-expression.component.html'
})
export class GreaterThanEqualToConditionalExpressionTemplateDrivenValidationDirectivesComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
