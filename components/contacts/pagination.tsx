import { Button } from '../ui/button';

interface Props {}

export const ContactsTablePagination = (props: Props) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t">
      <div className="text-sm text-muted-foreground">
        Page
        <input
          type="number"
          className="w-12 h-8 mx-2 text-center border rounded-md"
          defaultValue={1}
          min={1}
        />
        of 5
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" className="h-8 w-8">
          <span className="sr-only">Previous page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <span className="sr-only">Next page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Button>
      </div>
    </div>
  );
};
