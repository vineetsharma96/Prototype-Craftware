export default function ContactForm({ preselectedProduct }) {
  return (
    <section style={{ padding: '40px 20px' }}>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <textarea placeholder="Your message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}