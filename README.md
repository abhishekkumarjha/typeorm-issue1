### How to run
```Shell
yarn build && yarn start
```

### What it is
The repository contains a simplified replication of an issue I am facing in a private project while upgrading the typeorm version from 0.1.19 to 0.2.9.

The repo throws an error when using the latest version of typeorm while it works fine with an older version (0.1.19).

### Error

```
 TypeError: Cannot read property 'profile' of undefined
    at RelationMetadata.getEntityValue (C:\<path-to-repo>\src\metadata\RelationMetadata.ts:368:26)
    at OneToOneInverseSideSubjectBuilder.buildForSubjectRelation (C:\<path-to-repo>\src\persistence\subject-builder\OneToOneInverseSideSubjectBuilder.ts:68:58)
    at C:\<path-to-repo>\src\persistence\subject-builder\OneToOneInverseSideSubjectBuilder.ts:42:22
    at Array.forEach (<anonymous>)
    at C:\<path-to-repo>\src\persistence\subject-builder\OneToOneInverseSideSubjectBuilder.ts:35:48
    at Array.forEach (<anonymous>)
    at OneToOneInverseSideSubjectBuilder.build (C:\<path-to-repo>\src\persistence\subject-builder\OneToOneInverseSideSubjectBuilder.ts:34:23)
    at EntityPersistExecutor.<anonymous> (C:\<path-to-repo>\src\persistence\EntityPersistExecutor.ts:105:73)
    at step (C:\<path-to-repo>\node_modules\typeorm\persistence\EntityPersistExecutor.js:32:23)
    at Object.next (C:\<path-to-repo>\node_modules\typeorm\persistence\EntityPersistExecutor.js:13:53)
```
