exports.handler = async function(event, context) {
    const { identity, user } = context.clientContext;
  
    if (!user) {
      return {
        statusCode: 401,
        body: "Unauthorized",
      };
    }
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Authorized" }),
    };
  }
  