---
title: "Set Password"
---
<h1>Test Widget Page</h1>
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (typeof netlifyIdentity !== 'undefined') {
    netlifyIdentity.on('init', user => {
      if (!user) {
        netlifyIdentity.open('signup');
      }
    });
  }
</script>
