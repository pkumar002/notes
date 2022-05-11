# Lifecycle methods

**`1. beforeCreate: `** <br>
Call immediately when the `instance` is initialized, after `props` resolution.
before processing other options such as `data` and `computed`.

`Note:`<br>

- `setup()` called before any option api hook, even `beforeCreate`.
- You have no access of this.
- You can access `setup()` hook return values.
