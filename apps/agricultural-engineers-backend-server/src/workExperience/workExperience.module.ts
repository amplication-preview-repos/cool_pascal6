import { Module } from "@nestjs/common";
import { WorkExperienceModuleBase } from "./base/workExperience.module.base";
import { WorkExperienceService } from "./workExperience.service";
import { WorkExperienceController } from "./workExperience.controller";
import { WorkExperienceResolver } from "./workExperience.resolver";

@Module({
  imports: [WorkExperienceModuleBase],
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService, WorkExperienceResolver],
  exports: [WorkExperienceService],
})
export class WorkExperienceModule {}
