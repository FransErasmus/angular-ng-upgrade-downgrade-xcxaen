export const ajsUserComponent = [
  'ajsUser',
  {
    template: `
    <div class="component">
      <h2>Angular JS Component</h2>
      <p>
        Hi! I am {{ $ctrl.username }}
      </p>
      <button ng-click="$ctrl.select($ctrl.username)">Update username</button>
    </div>
  `,
    bindings: {
      username: '<',
      select: '&'
    },
    controller: [function() {}]
  }
];
