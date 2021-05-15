module.exports = {
  rules: {
    'no-inner-text': {
      meta: {
        type: 'suggestion',
        fixable: 'code',
        messages: {
          unexpected: "Prefer 'textContent' over 'innerText'"
        }
      },
      create: context => {
        return {
          MemberExpression: node => {
            if (node.property.name === 'innerText') {
              context.report({
                node: node.property,
                messageId: 'unexpected',
                fix: fixer => fixer.replaceText(node.property, 'textContent')
              })
            }
          }
        }
      }
    }
  },
  configs: {
    recommended: {
      plugins: ['js-snip'],
      rules: {
        'js-snip/no-inner-text': 'error'
      }
    }
  }
}
