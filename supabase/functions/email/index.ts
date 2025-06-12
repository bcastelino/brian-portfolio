import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
// CORS headers for all responses
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};
serve(async (req)=>{
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: corsHeaders
    });
  }
  try {
    const { name, email, title, message } = await req.json();
    const MAILGUN_API_KEY = Deno.env.get("MAILGUN_API_KEY");
    const MAILGUN_DOMAIN = Deno.env.get("MAILGUN_DOMAIN");
    const formData = new FormData();
    formData.append("from", `Portfolio Message <postmaster@${MAILGUN_DOMAIN}>`);
    formData.append("to", "Brian Castelino <briancastelino07@gmail.com>");
    formData.append("subject", title);
    formData.append("text", `From: ${name} <${email}>\n\n${message}`);
    const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: "POST",
      headers: {
        Authorization: "Basic " + btoa(`api:${MAILGUN_API_KEY}`)
      },
      body: formData
    });
    const data = await response.json();
    if (!response.ok) {
      return new Response(JSON.stringify({
        error: data.message || "Failed to send email"
      }), {
        status: 500,
        headers: corsHeaders
      });
    }
    return new Response(JSON.stringify({
      success: true,
      data
    }), {
      status: 200,
      headers: corsHeaders
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: error.message || "Unknown error"
    }), {
      status: 500,
      headers: corsHeaders
    });
  }
});
