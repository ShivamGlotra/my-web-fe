import { SkillGroup } from "@/types/content";
import styles from "./Toolkit.module.scss";
import { Heading } from "@/components/Heading";
import { Text } from "@/components/Text";

type ToolkitProps = {
  groups: SkillGroup[];
};

export const Toolkit = ({ groups }: ToolkitProps) => {
  if (groups.length === 0) return null;

  return (
    <div className={styles.toolkit}>
      <Heading level={3} className="visually-hidden">
        Toolkit
      </Heading>

      <dl className={styles.groups}>
        {groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <dt>
              <Text element="span" size="label" accent>
                {group.label}
              </Text>
            </dt>
            <dd>{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};
