import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MinLengthDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/decorators/minLength/min-length-decorators-extended.module";
import { MinLengthValidatorsExtendedModule } from "src/assets/examples/reactive-form-validators/validators/minLength/min-length-validators-extended.module";
import { MinLengthTemplateDrivenValidationDirectivesExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-directives/minLength/min-length-validation-directives-extended.module";
import { MinLengthTemplateDrivenValidationDecoratorsExtendedModule } from "src/assets/examples/reactive-form-validators/template-driven/validation-decorators/minLength/min-length-validation-decorators-extended.module";
import { MIN_LENGTH_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/minLength/min-length.constants";
import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_LENGTH_ROUTING } from "src/app/components/form-validation/minLength/min-length.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MIN_LENGTH_ROUTING ,MinLengthDecoratorsExtendedModule, MinLengthValidatorsExtendedModule, MinLengthTemplateDrivenValidationDirectivesExtendedModule, MinLengthTemplateDrivenValidationDecoratorsExtendedModule ,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_LENGTH_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinLengthModule { }

