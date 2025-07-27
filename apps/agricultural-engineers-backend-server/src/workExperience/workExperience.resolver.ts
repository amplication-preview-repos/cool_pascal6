import * as graphql from "@nestjs/graphql";
import { WorkExperienceResolverBase } from "./base/workExperience.resolver.base";
import { WorkExperience } from "./base/WorkExperience";
import { WorkExperienceService } from "./workExperience.service";

@graphql.Resolver(() => WorkExperience)
export class WorkExperienceResolver extends WorkExperienceResolverBase {
  constructor(protected readonly service: WorkExperienceService) {
    super(service);
  }
}
