interface OwnProps {
  message: string;
  className?: string;
}

export const Message = (props: OwnProps) => (
  <div className="container" data-testid="message">
    <div className="alert alert-info">
      <p className={props.className}>{props.message}</p>
    </div>
    <br />
  </div>
);

export default Message;
