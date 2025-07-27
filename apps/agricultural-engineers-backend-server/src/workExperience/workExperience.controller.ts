import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorkExperienceService } from "./workExperience.service";
import { WorkExperienceControllerBase } from "./base/workExperience.controller.base";

@swagger.ApiTags("workExperiences")
@common.Controller("workExperiences")
export class WorkExperienceController extends WorkExperienceControllerBase {
  constructor(protected readonly service: WorkExperienceService) {
    super(service);
  }
}
