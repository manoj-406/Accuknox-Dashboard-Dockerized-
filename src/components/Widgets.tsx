import WidgetCard from "./WidgetCard";

import EmptyWidgetCard from "./EmptyWidgetCard";
import { widgetsState, WidgetStatus } from "../store/atom";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";

const Widgets = () => {
  const data = useRecoilValue(widgetsState);
  const status = useRecoilValue(WidgetStatus);
  const [widgetsData, setWidgetsData] = useState<any>([]);

  useEffect(() => {
    setWidgetsData(data);
  }, [data]);

  return (
    <div className="px-4">
      <div>
        {widgetsData?.map((item: any) => (
          <div key={item.id}>
            <h1 className="font-bold">{item.name}</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 md:p-4 p-2">
              {item.widgets.map(
                (widget: {
                  id: keyof typeof status;
                  name: string;
                  text: string;
                  image: string;
                }) =>
                  status[widget.id] && (
                    <WidgetCard
                      key={widget.id}
                      title={widget.text}
                      name={widget.name}
                      id={widget.id}
                      image={widget.image}
                    />
                  )
              )}
              <EmptyWidgetCard />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widgets;
