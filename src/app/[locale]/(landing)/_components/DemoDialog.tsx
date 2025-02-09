import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import { DisplayFont } from "./DisplayFont";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { type DemoDialogTranslation } from "~/i18n/translations/DemoDialog";

type props = {
  translation: DemoDialogTranslation;
};

export function DemoDialog(props: props) {
  const { translation } = props;

  return (
    <DialogContent className="flex flex-col justify-between space-y-1 divide-y-2 divide-stone-700 rounded-md border-stone-700 bg-stone-950/50 text-stone-50 backdrop-blur-lg">
      <DialogHeader>
        <DialogTitle>
          <DisplayFont className="text-3xl">{translation.title}</DisplayFont>
        </DialogTitle>
        <DialogDescription>{translation.description}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col space-y-2 py-4">
        <p>{translation.givenName}</p>
        <Input className="w-full" placeholder="John" type="text" required />
        <p>{translation.surname}</p>
        <Input className="w-full" placeholder="Doe" type="text" required />
        <p>{translation.businessEmail}</p>
        <Input
          className="w-full"
          placeholder="hotmail@yourcompany.com"
          type="email"
          required
        />
        <div />
        <p>{translation.teamSize}</p>
        <Input className="w-full" placeholder="1-100" type="number" required />
        <p>{translation.lookingFor}</p>
        <Input
          className="w-full"
          placeholder={translation.lookingForPlaceholder}
          type="text"
          required
        />
        <div />
        <Button
          className="w-min rounded-full px-4 py-2 font-bold"
          variant="secondary"
        >
          {translation.submit}
        </Button>
      </div>
      <DialogFooter className="flex w-full items-center pt-4">
        <p>{translation.confirmation}</p>
      </DialogFooter>
    </DialogContent>
  );
}
