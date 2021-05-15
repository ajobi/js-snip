module.exports = {
  rules: {
    'no-inner-text': {
      meta: {
        type: 'suggestion',
        fixable: 'code',
        schema: [],
        messages: {
          unexpected: "Prefer 'textContent' over 'innerText'"
        }
      },
      create: context => {
        return {
          MemberExpression: node => {
            if (node.property.name === 'innerText') {
              context.report({
                node: node,
                messageId: 'unexpected',
                fix: () => {
                  // TODO: implement fix
                  // return fixer.insertTextAfter(node, ';')
                }
              })
            }
          }
        }
      }
    }
  }
}
