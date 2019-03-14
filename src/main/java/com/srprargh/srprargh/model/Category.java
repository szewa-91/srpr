package com.srprargh.srprargh.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class Category implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;
    private String icon;
    private String background;
    @OneToMany
    @JoinColumn(name = "category_id")
    private Set<Sound> sounds;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    public Set<Sound> getSounds() {
        return sounds;
    }

    public void setSounds(Set<Sound> sounds) {
        this.sounds = sounds;
    }
}
