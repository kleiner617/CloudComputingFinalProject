import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UniNetPostModule } from './post/post.module';
import { UniNetTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        UniNetPostModule,
        UniNetTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UniNetEntityModule {}
